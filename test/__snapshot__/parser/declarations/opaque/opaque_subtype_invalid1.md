# Kataw parser test case

## Input

`````js
opaque Ident: Type = SuperType;
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
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "opaque",
                "rawText": "opaque",
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "Ident",
                "rawText": "Ident",
                "flags": 768,
                "start": 6,
                "end": 12
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "Type",
                        "rawText": "Type",
                        "flags": 768,
                        "start": 13,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "SuperType",
                        "rawText": "SuperType",
                        "flags": 768,
                        "start": 20,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 30
                },
                "flags": 128,
                "start": 13,
                "end": 31
            },
            "flags": 128,
            "start": 6,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "opaque Ident: Type = SuperType;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 12
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

