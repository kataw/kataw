# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> /* 1 */
> `````

> `````js
> /* 1 */ /* 2 */ /* 3 */
> `````

> `````js
> /* 1
>  */
> `````

> `````js
> /* 1 */
> `````

> `````js
>  /** 校验子节点值的时机 */
> `````

> `````js
>  /* 1 */
> `````

> `````js
>  /** // x */
> `````

### Templates

#### function with no arguments

`````js
function x(
  #
) {}
`````

#### function with one argument

`````js
function x(y
  #
) {}
`````

#### array with multiline

`````js
[
  ,
  ,
  #
]
`````

#### array singleline

`````js
[ , , , , , #,  , , #,  #,,,,,,,,,,]
`````

#### class declaration

`````js
class # x {}
`````

#### class declaration with field

`````js
class x { #
 # y # = # z; #
}
`````

#### lexical let

`````js
let # x: string; #
`````

#### switch statement

`````js
switch # x # { #
  case # y: #
  default: #
}
`````

#### if statement

`````js
if # ( # x # ) # { # } else { # }
`````

#### binary expr

`````js
x # * # y #
`````

#### conditional

`````js
a  # ? #  b # : # c #;
`````

#### object literal

`````js
x #= #{ y#:# z #}#
`````

#### regex

`````js
#
/x/
`````

#### assignment

`````js
y = # b
`````

#### comma separator

`````js
a, # b, # c
`````


