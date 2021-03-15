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
>  /** @{x6821}@@{x9a8c}@@{x5b50}@@{x8282}@@{x70b9}@@{x503c}@@{x7684}@@{x65f6}@@{x673a}@ */
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



## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function x(\n  #\n) {}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "#",
                            "rawText": "x",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 15
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 17
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 20
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 15,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Private identifiers cannot be used as parameters",
            "start": 14,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

