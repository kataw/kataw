# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: if (true) function* g() {  } else ;
## Options

`````js
{}
`````
## Input

`````js
if (true) function* g() {  } else ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 18
                },
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 18,
                    "end": 19
                },
                "name": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 28
                },
                "returnType": null,
                "flags": 272,
                "transformFlags": 0,
                "start": 9,
                "end": 28
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 28,
                "end": 33
            },
            "alternate": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 35
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "if (true) function* g() {  } else ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Generators can only be declared at the top level or inside a block - start: 19, end: 21

```

