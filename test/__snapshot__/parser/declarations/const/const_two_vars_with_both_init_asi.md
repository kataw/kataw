# Kataw parser test case

## Input

`````js
const foo = bar, zoo = boo
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
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "bar",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 15
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "zoo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 16,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "boo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 22,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 16,
                        "end": 26
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "const foo = bar, zoo = boo",
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

