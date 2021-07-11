# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/function/func_statements/gen/gen/in_do_two_lines
> :: test: in do two lines
> :: case: async function f(){}
## Options

`````js
{}
`````
## Input

`````js
do async function f(){}
while (x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 2,
                    "end": 8
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 8,
                    "end": 17
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "returnType": null,
                "flags": 144,
                "start": 2,
                "end": 23
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 65,
                "start": 23,
                "end": 29
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 31,
                "end": 32
            },
            "flags": 80,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "do async function f(){}\nwhile (x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 8

```

