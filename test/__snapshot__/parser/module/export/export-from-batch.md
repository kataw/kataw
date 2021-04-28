# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * from "foo";
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
            "exportFromClause": {
                "kind": 259,
                "moduleExportName": null,
                "namedBinding": null,
                "flags": 128,
                "start": 0,
                "end": 8
            },
            "fromClause": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": true,
    "text": "export * from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

