# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export class C {
}

export = B;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export class C {\n}\n\nexport = B;",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 12,
                    "end": 14
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 16,
                    "end": 18
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 6,
                "end": 18
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 8267,
            "expression": {
                "kind": 196712,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

