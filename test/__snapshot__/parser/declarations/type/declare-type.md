# Kataw parser test case

## Input

`````js
declare type bool = any;
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
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 7,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "bool",
                "rawText": "bool",
                "flags": 96,
                "start": 12,
                "end": 17
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234252,
                "flags": 64,
                "start": 19,
                "end": 23
            },
            "flags": 4112,
            "start": 7,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "declare type bool = any;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

