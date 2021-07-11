# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: 'use strict'; if (true) { function my_var() {} } my_var;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; if (true) { function my_var() {} } my_var;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 25,
                                "end": 34
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "my_var",
                                "rawText": "my_var",
                                "flags": 96,
                                "start": 34,
                                "end": 41
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 42,
                                "end": 42
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 46
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 25,
                            "end": 46
                        }
                    ],
                    "flags": 16,
                    "start": 25,
                    "end": 46
                },
                "flags": 16,
                "start": 23,
                "end": 48
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 13,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "my_var",
                "rawText": "my_var",
                "flags": 96,
                "start": 48,
                "end": 55
            },
            "flags": 16,
            "start": 48,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "'use strict'; if (true) { function my_var() {} } my_var;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

"'use strict'";
if (true) {
  function my_var() {}
}
my_var;

```

### Diagnostics

```javascript
✔ No errors
```

