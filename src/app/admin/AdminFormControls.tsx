export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}<span className="mt-1 block [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:bg-white [&_input]:p-3 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:bg-white [&_select]:p-3 [&_textarea]:w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:bg-white [&_textarea]:p-3 dark:[&_input]:bg-gray-800 dark:[&_select]:bg-gray-800 dark:[&_textarea]:bg-gray-800">{children}</span></label>
}

export function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return <label className="flex items-center gap-2"><input className="h-4 w-4 accent-primary" type="checkbox" checked={checked} onChange={event => onChange(event.target.checked)} />{label}</label>
}
