class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :tags, :category, :glass, :instructions, :img_url
end
