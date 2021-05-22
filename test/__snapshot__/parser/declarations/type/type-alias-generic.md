# Kataw parser test case

## Input

`````js
type T<U> = U;
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
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "opaqueType": null,
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "initializer": null,
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
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "typeParameters": null,
                "flags": 0,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "type T<U> = U;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

