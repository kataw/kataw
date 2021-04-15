# Kataw parser test case

## Input

`````js
type T1 = string;
type T1 = number;
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
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 768,
                "start": 4,
                "end": 7
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234347,
                "flags": 768,
                "start": 9,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 17,
                "end": 25
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 768,
                "start": 22,
                "end": 25
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234345,
                "flags": 768,
                "start": 27,
                "end": 34
            },
            "flags": 128,
            "start": 17,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "type T1 = string;\ntype T1 = number;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

