# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/import-call/gen/stand-alone
> :: test: stand-alone
> :: case: let x = import(x)
## Options

`````js
{}
`````
## Input

`````js
let x = import(x)
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 206,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 14
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 17
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "let x = import(x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
let x = import(x);
```

### Diagnostics

```javascript
✔ No errors
```

