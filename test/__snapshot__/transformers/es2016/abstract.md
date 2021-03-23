# Kataw parser test case

## Options
### Transform Options
`````js
{jsx: true, disableWebCompat: true, module: true, transformers: ["ES2015"]}
`````

## Input

`````js
abstract class C1 {}
`````

## Output
### Transform Output

```javascript
{
    "kind": 2243,
    "source": "abstract class C1 {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C1",
                "rawText": "C1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 19,
                "end": 20
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536870912,
            "symbol": null,
            "transformFlags": 2097153,
            "start": 8,
            "end": 20
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```
