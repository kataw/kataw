# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: for (var of of of){}
## Options

`````js
{}
`````
## Input

`````js
for (var of of of){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 8
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "of",
                                "rawText": "of",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 8,
                            "end": 11
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 11,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 20
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for (var of of of){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

for (var of of of) {}
```

### Diagnostics

```javascript
✔ No errors
```

