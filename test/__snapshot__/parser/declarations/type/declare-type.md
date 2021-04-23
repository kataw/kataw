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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": {
                "kind": 82165,
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 7,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "bool",
                "rawText": "bool",
                "flags": 768,
                "start": 12,
                "end": 17
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234252,
                "flags": 768,
                "start": 19,
                "end": 23
            },
            "flags": 32896,
            "start": 7,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "declare type bool = any;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

