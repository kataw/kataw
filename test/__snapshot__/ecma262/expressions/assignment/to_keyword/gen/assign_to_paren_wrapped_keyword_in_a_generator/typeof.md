# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren_wrapped_keyword_in_a_generator
> :: test: assign to paren wrapped keyword in a generator
> :: case: typeof
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  (typeof) = 1;
}
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 138477613,
                                            "flags": 96,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "operand": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 25
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 30
                },
                "flags": 32,
                "start": 13,
                "end": 32
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  (typeof) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 24, end: 25

```

