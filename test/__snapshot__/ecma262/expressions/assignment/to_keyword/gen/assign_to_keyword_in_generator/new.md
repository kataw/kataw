# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  new = 1;
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "argumentList": null,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 14,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 27
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  new = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 22
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22

```

