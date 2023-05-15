
include("tp_dictionary.jl")

struct Word
    toki::String
    english::String
end

words=Vector{Word}()
tokiList=Vector{String}()

for (key, value) in pairs(tokiPonaDictionary)
    word=Word(key,value)
    push!(words,word)
    push!(tokiList,key)
end



for word in words
    incorrect=rand(tokiList)
    while incorrect==word.toki
        incorrect=random(tokiList)
    end
    print("{word: \""*word.toki*"\"")
    print(", translation: \""*word.english*"\"")
    print(", correct: \""*word.toki*"\"")
    print(", incorrect: \""*word.toki*"\"")
    print(", imageFile: \"\\\"../img/"*word.toki*".png\\\"\"},")
    println()
end

#, correct: "suli", incorrect: "lili",

