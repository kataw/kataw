# Kataw parser test case

## Input

`````js
type T<U> = U;
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
                "text": "T",
                "rawText": "T",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "U",
                            "rawText": "U",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 7,
                        "end": 8
                    }
                ],
                "flags": 0,
                "start": 6,
                "end": 9
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "U",
                    "rawText": "U",
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "typeParameters": null,
                "flags": 0,
                "start": 11,
                "end": 13
            },
            "flags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "type T<U> = U;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

