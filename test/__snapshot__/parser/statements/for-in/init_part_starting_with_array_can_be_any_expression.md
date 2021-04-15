# Kataw parser test case

## Input

`````js
for ([] + b in obj);
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 6,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 11,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 768,
                        "start": 14,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 11,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 18,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 19,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for ([] + b in obj);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

