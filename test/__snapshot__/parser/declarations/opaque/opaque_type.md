# Kataw parser test case

## Input

`````js
opaque type ID = number;
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
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 14
            },
            "name": {
                "kind": 134299649,
                "text": "ID",
                "rawText": "ID",
                "flags": 96,
                "start": 11,
                "end": 14
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234345,
                "flags": 64,
                "start": 16,
                "end": 23
            },
            "flags": 16,
            "start": 6,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "opaque type ID = number;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

