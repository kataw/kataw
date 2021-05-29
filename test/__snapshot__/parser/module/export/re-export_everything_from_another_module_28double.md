# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * from "foo"
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": {
                "kind": 259,
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "asKeyword": null,
                "moduleExportName": null,
                "namedBinding": null,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 8,
                    "end": 13
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "flags": 0,
                "start": 8,
                "end": 19
            },
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "export * from \"foo\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

export * from ;
```

### Diagnostics

```javascript
✔ No errors
```

