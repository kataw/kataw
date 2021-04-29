# Kataw parser test case

## Input

`````js
type T1 = string;
type T1 = number;
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
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234347,
                "flags": 64,
                "start": 9,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 17,
                "end": 25
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 22,
                "end": 25
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234345,
                "flags": 64,
                "start": 27,
                "end": 34
            },
            "flags": 16,
            "start": 17,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type T1 = string;\ntype T1 = number;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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

