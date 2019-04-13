module ApplicationHelper
	require 'json'

	@manifest = nil
	def getAsset(name)
		is_prod = Rails.env === "production"
		manifest_path =  Rails.public_path.join('manifest.json')
		if(File.file?(manifest_path))
			@manifest ||= JSON.parse(File.read(manifest_path)) 

			if @manifest
				return @manifest[name]
			end
		end

		return ''
	end
end
