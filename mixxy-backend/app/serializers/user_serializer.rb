class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :drinks

  def drinks
    ActiveModel::SerializableResource.new(object.drinks, each_serializer: DrinkSerializer)
  end
end
