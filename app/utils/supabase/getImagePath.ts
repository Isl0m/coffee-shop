export const getImagePath = (path: string) => {
  return process.env.SUPABASE_URL + '/storage/v1/object/public/images/' + path
}
