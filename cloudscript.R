library("tm")
library("wordcloud")
library("SnowballC")

a.df<-read.csv("2014622_21.csv", header = FALSE, sep = ",", quote="\"", fill = TRUE)

a.corpus<-Corpus(DataframeSource(data.frame(a.df[,3])))
a.corpus<-tm_map(a.corpus, stripWhitespace)
a.corpus<-tm_map(a.corpus, tolower)
a.corpus<-tm_map(a.corpus, removeNumbers)
a.corpus<-tm_map(a.corpus, removePunctuation)
a.corpus<-tm_map(a.corpus, removeWords, stopwords("english"))
a.corpus<-tm_map(a.corpus, removeWords, stopwords("spanish"))
a.corpus<-tm_map(a.corpus, stemDocument)
a.corpus<-tm_map(a.corpus, removeWords, c("worldcup", "world", "mundial", "fifa", "mundo", "fifaworldcup", "\
football", "copa", "ball", "copa", "worldcupfin", "httptco", "day", "will", "httpt", "htt", "copagracia", "w\
orldchampion", "http"))

png("cloud622.png", width=500, height=500, res=150, bg="grey")

a<-tm_map(a.corpus, PlainTextDocument)

wordcloud(a,scale=c(8,0.5), max.words=100, random.order=FALSE, rot.per=0.35, use.r.layout=FALSE, colors=brew\
er.pal(6,"Dark2"), vfont=c("sans serif", "plain"))