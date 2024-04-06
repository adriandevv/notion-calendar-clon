import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {useDebounce} from "use-debounce";

const FormSchema = z.object({
  search: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export default function TextareaForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [searchValue, setSearchValue] = useState("");
  const [searching, setSearching] = useState(false);

  const [debouncedSearchValue] = useDebounce(searchValue, 600);

  useEffect(() => {
    // Esta función se ejecutará cuando debouncedSearchValue cambie
    if (debouncedSearchValue) {
      // Realizar búsqueda aquí
      console.log("Searching for:", debouncedSearchValue);
      setSearching(true);
    } else {
      setSearching(false);
    }
  }, [debouncedSearchValue]);

  function handleClearSearch() {
    setSearchValue("");
  }

  return (
    <>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    className={`flex justify-center items-center border border-transparent hover:border-slate-400 rounded-md  ${
                      searching ? "focus:bg-slate-600" : ""
                    }`}
                  >
                    <CiSearch className="size-6 mr-1" />
                    <input
                      type="text"
                      autoComplete="off"
                      {...field}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="bg-black text-white w-full border-none h-10 focus:outline-none"
                    />
                    {searchValue && (
                      <IoIosClose
                        className="size-7 cursor-pointer"
                        onClick={handleClearSearch}
                      />
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="hidden" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
