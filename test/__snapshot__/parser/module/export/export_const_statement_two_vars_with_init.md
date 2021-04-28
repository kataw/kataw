# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export const x = 10, y = 20
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 6,
                "start": 0,
                "end": 12
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 768,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 128,
                        "start": 12,
                        "end": 19
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 20,
                            "rawText": "20",
                            "flags": 768,
                            "start": 24,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 20,
                        "end": 27
                    }
                ],
                "flags": 160,
                "start": 12,
                "end": 27
            },
            "flags": 128,
            "start": 6,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "export const x = 10, y = 20",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

