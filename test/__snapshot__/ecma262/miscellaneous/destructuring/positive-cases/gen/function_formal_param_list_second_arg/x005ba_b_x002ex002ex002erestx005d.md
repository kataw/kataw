# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/positive-cases/gen/function_formal_param_list_second_arg
> :: test: function formal param list second arg
> :: case: [a,b,...rest]
## Options

`````js
{}
`````
## Input

`````js
function f(argument1, [a,b,...rest]) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "argument1",
                        "rawText": "argument1",
                        "flags": 96,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 24
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 30
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 34
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "start": 27,
                                    "end": 34
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 23,
                            "end": 34
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 35
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 35
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 38,
                    "end": 38
                },
                "flags": 32,
                "start": 36,
                "end": 39
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function f(argument1, [a,b,...rest]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  function f(argument1, [a, b, ...rest]) {}

```

### Diagnostics

```javascript
✔ No errors
```

