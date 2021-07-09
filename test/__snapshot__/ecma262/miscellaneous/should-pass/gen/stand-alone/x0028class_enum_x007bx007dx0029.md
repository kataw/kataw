# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: (class enum {})
## Options

`````js
{}
`````
## Input

`````js
(class enum {})
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "enum",
                        "rawText": "enum",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 11
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 11,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "(class enum {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
(class enum {});
```

### Diagnostics

```javascript
✔ No errors
```

