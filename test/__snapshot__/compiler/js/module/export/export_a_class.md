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


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export class x {}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 48,
                    "name": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 65536,
                        "intersects": false,
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
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 16,
                        "end": 17
                    },
                    "decorators": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 6,
                    "end": 17
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

