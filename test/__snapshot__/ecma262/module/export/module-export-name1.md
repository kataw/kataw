# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * as "string";
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
                "asKeyword": {
                    "kind": 16494,
                    "flags": 80,
                    "start": 8,
                    "end": 11
                },
                "moduleExportName": {
                    "kind": 201392131,
                    "text": "string",
                    "rawText": "\"string\"",
                    "flags": 96,
                    "start": 11,
                    "end": 20
                },
                "namedBinding": null,
                "flags": 0,
                "start": 0,
                "end": 20
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 20,
                    "end": 20
                },
                "flags": 0,
                "start": 20,
                "end": 20
            },
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "export * as \"string\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 21

```

