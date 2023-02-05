numColumns= None
numRows= None
board= []

# width x height= 3x2 
# board= [2 2 2]
# [[O O O],
#  [O O O]]

# chomp (1,1):
# board= [2 1 1]
# [[O O O],
#  [O X X]]

# for (j,columnLen) in enumerate(board):
#     for (i,row) in enumerate(board_2d):
#         if i>=columnLen:
#             row[j]= "X"



def createBoard(width, height):
    global numColumns, numRows, board
    numColumns= width
    numRows= height
    board= [numRows]*numColumns
    print("Creating",numColumns,"x",numRows,"board!")
    printBoard()

def printBoard():
    print("Board:", board)
    print("2D Board:")

    #Create board_2d and set all cells to "O" ("O" means "unchomped")
    #-Note: couldn't do [["O"]*numColumns]*numRows because that put an
    #       identical list into each row, so changes to one row of the
    #       2D list affected all the rows! Took an hour of debugging!
    board_2d = []
    for i in range(numRows):
        row = ["O"] * numColumns
        board_2d.append(row)

    #Set chomped cells to "X" ("X" means "chomped")
    for x in range(numRows):
        for y in range(numColumns):
            if x >= board[y]:
                board_2d[x][y]= "X"

    #Print board_2d with labels on the x and y axes
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
    for column in range(x,numColumns):
        board[column]= y
    printBoard()

if __name__ == '__main__':
    createBoard(6,7)
    print()
    chomp(2,3)