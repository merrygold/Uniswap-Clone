import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'eam69p89',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk7ZTogH8v7fon809C2lW72h91uwdWyVXRaQa331tKEHhnNPfy4N2QP7FoUUYlASPOam8zuGQWUTPxLQCwxN4HGyB0iN7osYQwNnqLUppscqn6PlyOEgrVLvlCGMHigHz1zMaSkGe8FQ6hBLSMwyAiIXnvsAsYGzk6WTYhQC6qRdE9YDveC5',
  useCdn: false,
})