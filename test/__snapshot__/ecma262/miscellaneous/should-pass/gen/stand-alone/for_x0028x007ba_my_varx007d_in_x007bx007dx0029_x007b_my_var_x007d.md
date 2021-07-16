# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: for ({a, my_var} in {}) { my_var; }
## Options

`````js
{}
`````
## Input

`````js
for ({a, my_var} in {}) { my_var; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 15
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 5,
                "end": 16
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 16,
                "end": 19
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 19,
                "end": 22
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "my_var",
                                "rawText": "my_var",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 32
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 25,
                            "end": 33
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 35
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "for ({a, my_var} in {}) { my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
for ({ a, my_var } in {}) {
    my_var;
  }
```

### Diagnostics

```javascript
✔ No errors
```

