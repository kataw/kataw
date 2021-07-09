# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: import.call
## Options

`````js
{}
`````
## Input

`````js
{ import.call
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 299,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 8
                            },
                            "metaIdentifier": null,
                            "flags": 8,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 9
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 9
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "call",
                            "rawText": "call",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 9,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ import.call",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 8, end: 13
✖ 'import.meta' is the only valid meta property for import - start: 8, end: 13

```

