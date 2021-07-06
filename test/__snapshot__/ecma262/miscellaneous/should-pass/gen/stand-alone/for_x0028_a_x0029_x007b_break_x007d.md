# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: for ( a ; ; ) { break }
## Options

`````js
{}
`````
## Input

`````js
for ( a ; ; ) { break }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "label": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 21
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 23
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for ( a ; ; ) { break }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
for (a; ; ) {
    break ;
  }
```

### Diagnostics

```javascript
✔ No errors
```

