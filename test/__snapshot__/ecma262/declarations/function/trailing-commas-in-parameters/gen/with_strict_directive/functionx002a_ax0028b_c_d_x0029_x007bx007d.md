# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/trailing-commas-in-parameters/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/trailing-commas-in-parameters/gen/with_strict_directive
> :: test: with strict directive
> :: case: function* a(b,c,d,) {}
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function* a(b,c,d,) {}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 13,
                "end": 22
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 26,
                        "end": 27
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 28,
                        "end": 29
                    },
                    {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 30,
                        "end": 31
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "start": 26,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 35,
                    "end": 35
                },
                "flags": 32,
                "start": 33,
                "end": 36
            },
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* a(b,c,d,) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

  "'use strict'";
  function* a(b, c, d,) {}

```

### Diagnostics

```javascript
✔ No errors
```

