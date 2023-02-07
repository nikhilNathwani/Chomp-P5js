numColumns= None
numRows= None
board= []


def createBoard(width, height):
    global numColumns, numRows, board
    numColumns= width
    numRows= height
    board= [numColumns]*numRows
    print("Creating board with",numRows,"rows and",numColumns,"columns!")
    printBoard()


def printBoard():
    print("Board:", board)
    print("2D Board:")

    #Create board_2d and set all cells to letter "O" ("O" means "unchomped")
    board_2d = []
    for i in range(numRows):
        row = ["O"] * numColumns
        board_2d.append(row)
        #^Note: couldn't do [["O"]*numColumns]*numRows because that put an
        #       identical list into each row, so changes to one row of the
        #       2D list affected all the rows! Took an hour of debugging!

    #Set chomped cells to "X" ("X" means "chomped")
    for x in range(numRows):
        rowLen= board[x]
        for y in range(rowLen,numColumns):
            board_2d[x][y]= "X"

    #Print board_2d with row/column labels on the x and y axes
    columnHeaderString= ""
    for i in range(numColumns):
        columnHeaderString += "    "+str(i)
    print(columnHeaderString)
    for (i,row) in enumerate(board_2d):
        print(i,row)


#-Poison cell on top left is (0,0)
#-x increases from left to right
#-y increases from top to bottom
#-This function chomps cell (x,y) along with everything
#beneath it and to the right of it
def chomp(x,y):
    print("Chomping (",x,",",y,")!")
    #Add logic to throw error for x>columns or y>rows
    global board
    for row in range(y,numRows):
        board[row]= x
    printBoard()

if __name__ == '__main__':
    createBoard(6,7)
    print()
    chomp(2,3)