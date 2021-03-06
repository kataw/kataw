# Kataw parser test case

## Input

`````js
abstract class A {
  abstract #a;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract class A {\n  abstract #a;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 16
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "#a",
                                "rawText": "#a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 32
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 268451840,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 18,
                            "end": 33
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 18,
                    "end": 35
                },
                "decorators": null,
                "flags": 268435456,
                "intersects": false,
                "transformFlags": 2097153,
                "start": 8,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 35
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

