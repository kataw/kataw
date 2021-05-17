# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export class x {}
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 0,
                    "start": 6,
                    "end": 12
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "typeParameters": null,
                "members": {
                    "kind": 277,
                    "classHeritage": null,
                    "elements": [],
                    "flags": 32,
                    "start": 14,
                    "end": 17
                },
                "flags": 16,
                "start": 6,
                "end": 17
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": true,
    "source": "export class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

 class x {}
```

### Diagnostics

```javascript
✔ No errors
```

