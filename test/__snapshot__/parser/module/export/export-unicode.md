# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {𐀀 as x} from 'path'
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
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "𐀀",
                                "rawText": "𐀀",
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 80,
                                "start": 10,
                                "end": 13
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 15
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "start": 6,
                "end": 16
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 16,
                    "end": 21
                },
                "from": {
                    "kind": 201392131,
                    "text": "path",
                    "rawText": "'path'",
                    "flags": 4194400,
                    "start": 21,
                    "end": 28
                },
                "flags": 0,
                "start": 16,
                "end": 28
            },
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "source": "export {𐀀 as x} from 'path'",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

export { 𐀀 as x } from ;
```

### Diagnostics

```javascript
✔ No errors
```

