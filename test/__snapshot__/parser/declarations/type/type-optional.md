# Kataw parser test case

## Input

`````js
type a = ??string;
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
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 8,
                    "end": 8
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 8
            },
            "flags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 8,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 37143,
                    "flags": 768,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 768,
                    "start": 11,
                    "end": 17
                },
                "flags": 256,
                "start": 8,
                "end": 17
            },
            "flags": 128,
            "start": 8,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "type a = ??string;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 8,
            "end": 11
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

