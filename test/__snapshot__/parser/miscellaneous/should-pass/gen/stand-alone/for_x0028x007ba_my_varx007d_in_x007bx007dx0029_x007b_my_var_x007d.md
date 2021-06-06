# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: for ({a, my_var} in {}) { my_var; }
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
                            "start": 6,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 8,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 6,
                    "end": 15
                },
                "flags": 48,
                "start": 5,
                "end": 16
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
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
                    "start": 21,
                    "end": 21
                },
                "flags": 48,
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
                                "start": 25,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 25,
                            "end": 33
                        }
                    ],
                    "flags": 16,
                    "start": 25,
                    "end": 33
                },
                "flags": 16,
                "start": 23,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "for ({a, my_var} in {}) { my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

for ({ a, my_var } in {})
  {}
```

### Diagnostics

```javascript
✔ No errors
```

