# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: finally
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  finally = 1;
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
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "catchClause": null,
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 24
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 24
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 24
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 24
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  finally = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 14, end: 24
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 26
✖ Declaration or statement expected - start: 29, end: 31

```

