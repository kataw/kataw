# Kataw parser test case

## Input

`````js
type a = ??string;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 8,
                        "end": 8
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 8
                },
                "flags": 2097152,
                "start": 8,
                "end": 8
            },
            "flags": 64,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 8,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 11,
                    "end": 17
                },
                "flags": 96,
                "start": 8,
                "end": 17
            },
            "flags": 16,
            "start": 8,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type a = ??string;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 8, end: 11

```

