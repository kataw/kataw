# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren_wrapped_keyword_in_a_generator
> :: test: assign to paren wrapped keyword in a generator
> :: case: finally
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  (finally) = 1;
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
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 14,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 18
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 18
                        },
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
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 18
                            },
                            "catchClause": null,
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 25
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
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
                "end": 25
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  (finally) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 18, end: 25
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 28
✖ Declaration or statement expected - start: 31, end: 33

```

