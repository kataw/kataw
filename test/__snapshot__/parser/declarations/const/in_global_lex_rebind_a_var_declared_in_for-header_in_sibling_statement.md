# Kataw parser test case

## Input

`````js
for (var x;;);
const x = 1
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
    "statements": [
        {
            "kind": 165,
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 8,
                        "end": 10
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 8,
                "end": 10
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 24,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 20,
                        "end": 26
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 20,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "for (var x;;);\nconst x = 1",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

