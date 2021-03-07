# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> undefined
> `````

> `````js
> 6
> `````

> `````js
> 7
> `````

> `````js
> 8
> `````

> `````js
> 9
> `````

> `````js
> Infinity
> `````

### Templates

- `es = #`

#### must have args to trail

`````js
function f(,){}
`````

#### just commas is error

`````js
function f(,,){}
`````

#### one arg

`````js
function f(a,){}
`````

#### two args

`````js
function f(a,b,){}
`````

#### cannot elide

`````js
function f(a,,){}
`````

#### after default

`````js
function f(a = b,){}
`````

#### not allowed after rest

`````js
function f(...a,){}
`````

#### after array destruct

`````js
function f([x],){}
`````

#### after object destruct

`````js
function f({a},){}
`````

#### rest cant even have an default

`````js
function f(...a = x,){}
`````

#### after array destruct with default

`````js
function f([x] = y,){}
`````

#### after object destruct with default

`````js
function f({a} = b,){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function f(,){}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
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
                        "start": 12,
                        "end": 12
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 12
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 12,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

